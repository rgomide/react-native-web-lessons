```mermaid
erDiagram
    USERS {
        int id PK
        string name
        string username
        string email
        string address.street
        string address.suite
        string address.city
        string address.zipcode
        string address.geo.lat
        string address.geo.lng
        string phone
        string website
        string company.name
        string company.catchPhrase
        string company.bs
    }

    POSTS {
        int id PK
        int userId FK
        string title
        string body
    }

    COMMENTS {
        int id PK
        int postId FK
        string name
        string email
        string body
    }

    ALBUMS {
        int id PK
        int userId FK
        string title
    }

    PHOTOS {
        int id PK
        int albumId FK
        string title
        string url
        string thumbnailUrl
    }

    TODOS {
        int id PK
        int userId FK
        string title
        boolean completed
    }

    USERS ||--o{ POSTS: "has many"
    USERS ||--o{ ALBUMS: "has many"
    USERS ||--o{ TODOS: "has many"
    POSTS ||--o{ COMMENTS: "has many"
    ALBUMS ||--o{ PHOTOS: "has many"
    ```