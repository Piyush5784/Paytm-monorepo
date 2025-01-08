#  Paytm Monorepo


![Untitled-2024-11-08-1914 excalidraw](https://github.com/user-attachments/assets/851ba262-c771-4e9e-b15c-c101c2db9871)

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
