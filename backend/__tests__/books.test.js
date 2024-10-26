import request from 'supertest';
import app from '../index'; // adjust the path as needed
import mongoose from "mongoose";
import { ObjectId } from 'mongodb';




describe('Books API', () => {

    let bookId;

    beforeAll(async () => {
        const dburl = process.env.MONGO_URL
        await mongoose.connect(dburl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    });


    afterEach(async () => {
        if (bookId) {
            await mongoose.connection.collection('books').deleteOne({ _id: new ObjectId(bookId) });
            bookId = null;
        }
    });

    afterAll(async () => {
        await mongoose.connection.close();
        await new Promise(resolve => setTimeout(() => resolve(), 1000));
    });

    const createBookHelper = async () => {
        const response = await request(app)
            .post("/books")
            .send({
                title: "Sample Book",
                author: "Sample Author",
                publishYear: 2023,
            });
        bookId = response.body.data._id;
        return response;
    }

    it('should create a new book', async () => {
        const response = await createBookHelper();

        expect(response.status).toBe(201);
        expect(response.body.success).toBe(true);
        expect(response.body.data.title).toBe("Sample Book");

    }, 10000);


    it('should get all books', async () => {

        await createBookHelper();

        const response = await request(app).get('/books');

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data).toBeInstanceOf(Array);
        expect(response.body.data.length).toBeGreaterThan(0);
    });


    it('should get a single book', async () => {
        await createBookHelper();

        const response = await request(app).get(`/books/${bookId}`)

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.title).toBe("Sample Book");
    });

    it('should update a single book', async () => {
        await createBookHelper();

        const response = await request(app)
            .put(`/books/${bookId}`)
            .send({
                title: "Sample Book Edited",
            });

        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.data.title).toBe("Sample Book Edited");

    });

    it('should delete a single boom', async () => {
        await createBookHelper();

        const response = await request(app).delete(`/books/${bookId}`)
        expect(response.status).toBe(200);
        expect(response.body.success).toBe(true);
        expect(response.body.message).toBe('Book deleted successfully');

    })

});
