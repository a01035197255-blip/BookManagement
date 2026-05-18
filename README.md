# 📚 Book Management Project

Spring Boot + Next.js 기반 도서 관리 CRUD 웹 애플리케이션입니다.  
사용자는 도서를 등록, 조회, 수정, 삭제할 수 있으며 REST API 기반으로 동작합니다.

---

# 🚀 기술 스택

## Backend
- Java 17+
- Spring Boot
- Spring Data JPA
- Hibernate
- H2 Database (In-memory)

## Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

---

# ⚙️ 실행 방법

## Backend 실행
cd backend
./gradlew bootRun

## Frontend 실행
cd frontend
npm install
npm run dev

---

# 📡 API 엔드포인트

| 기능 | Method | URL |
|------|--------|-----|
| 전체 조회 | GET | /books |
| 단건 조회 | GET | /books/{id} |
| 등록 | POST | /books |
| 수정 | PUT | /books/{id} |
| 삭제 | DELETE | /books/{id} |

---

# 🎯 주요 기능

- 도서 등록 / 수정 / 삭제 / 조회
- REST API 구조
- H2 DB 사용
- Frontend / Backend 분리 구조
