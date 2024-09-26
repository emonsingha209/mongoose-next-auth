# Connecting Mongoose with NextAuth.js in Next.js

This guide outlines the steps to integrate MongoDB using Mongoose and implement Google authentication with NextAuth.js in a Next.js project.

## Prerequisites

- Node.js and npm installed
- MongoDB Atlas account or local MongoDB setup
- Google Cloud Console account

## Setup Steps

1. **Initialize Next.js Project**
   - Create a new Next.js project using `create-next-app`

2. **Install Dependencies**
   - Install `next-auth`, `mongoose`, and related types

3. **Environment Configuration**
   - Create `.env.local` file
   - Add MongoDB URI, Google OAuth credentials, and NextAuth secret

4. **MongoDB Connection**
   - Set up a MongoDB connection utility in `lib/mongodb.js`

5. **User Model**
   - Define the User schema in `models/User.js`

6. **NextAuth Configuration**
   - Set up NextAuth API route in `app/api/auth/[...nextauth]/route.js`
   - Configure Google provider and callbacks

7. **Authentication Implementation**
   - Use NextAuth hooks in components for authentication state
   - Implement sign-in and sign-out functionality

8. **Route Protection**
   - Set up middleware for protecting routes

9. **Run Development Server**
   - Start the Next.js development server

## Key Files

- `lib/mongodb.js`: MongoDB connection utility
- `models/User.js`: Mongoose User model
- `app/api/auth/[...nextauth]/route.js`: NextAuth configuration
- `middleware.js`: Route protection middleware

## Environment Variables

Ensure these are set in `.env.local`:
- `MONGODB_URI`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

## Google OAuth Setup

1. Create a project in Google Cloud Console
2. Enable Google+ API
3. Create OAuth 2.0 credentials
4. Set authorized origins and redirect URIs

## Deployment Notes

- Configure environment variables on the hosting platform
- Update OAuth settings for production URL
- Ensure database connection string is correct for production

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)

For detailed code implementation, refer to the project files in this repository.
