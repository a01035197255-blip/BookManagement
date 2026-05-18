📚 Book Management Project

Spring Boot + Next.js 기반 도서 관리 시스템

🚀 기술 스택
Backend
Java 17+
Spring Boot
Spring Data JPA
H2 Database (In-memory)
Hibernate
Frontend
Next.js (App Router)
React
TypeScript
Tailwind CSS

⚙️ 실행 방법
1️⃣ Backend 실행
cd backend
./gradlew bootRun

또는 IntelliJ에서 실행:

BookManagementApplication 실행
2️⃣ Frontend 실행
cd frontend
npm install
npm run dev

3️⃣ 접속 주소
Frontend: http://localhost:3000
Backend: http://localhost:8080
H2 Console: http://localhost:8080/h2-console

📡 API 엔드포인트
📘 Book API
기능	Method	URL
전체 조회	GET	/books
단건 조회	GET	/books/{id}
등록	POST	/books
수정	PUT	/books/{id}
삭제	DELETE	/books/{id}