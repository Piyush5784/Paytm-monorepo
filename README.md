#  Paytm Monorepo

![Payment Flow](https://github.com/user-attachments/assets/e8c90501-4f40-4d76-9d53-f01101c0528e)

Link :- https://excalidraw.com/#json=aMcPz_2XQaXQdPCTvThGi,-ErfqwLg6H0T-Mo6H4O9Mw

## Steps to init

- git clone https://github.com/Piyush5784/Paytm-monorepo
- add env in packages/db folder
  ```bash
  DATABASE_URL = "postgreSQL"
  ```
- npx prisma generate (in packages/db folder)
- add env in apps/user-app and apps/merchant
  ```bash
  JWT_SECRET = "mysecpassword"
  NEXTAUTH_URL = "http://localhost:3001"
  ```
  ```bash
  NEXTAUTH_URL = "http://localhost:3000"
  NEXTAUTH_SECRET = "mysecpassword2"

  GOOGLE_CLIENT_ID = ""
  GOOGLE_CLIENT_SECRET = ""
  ```
- npm run dev 
