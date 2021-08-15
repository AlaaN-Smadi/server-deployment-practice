'use strict';

const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.app);

describe('express server', () => {
    it('shoud check the main server root works successfully', async () => {
        // arrange
        let method = '/';
        let status = 200;
        let result = "Welcome To Alaa's Server";
        // act
        const response = await request.get(method);
        // assert
        expect(response.status).toBe(status);
        expect(response.text).toBe(result);
    });

    it('shoud check the Auther root type result', async () => {
        // arrange
        let method = '/gettingAutherData';
        let status = 200;

        // act
        const response = await request.get(method);
        // assert
        expect(response.status).toBe(status);
        expect(typeof response.body).toBe('object');
    });


    it('should check 500 errors', async () => {
        // arrange
        let method = '/bad';
        let status = 500;
        // act
        const response = await request.get(method);
        // assert
        expect(response.status).toBe(status);
        expect(response.body.route).toBe(method);
    });

    it('shoud check 404 not found errors', async () => {
        // arrange
        let method = '/notfound';
        let status = 404;
        // act
        const response = await request.get(method);
        // assert
        expect(response.status).toBe(status);
    });

    
});