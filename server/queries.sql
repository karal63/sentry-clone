create table users (
    id varchar(36) primary key,
    username varchar(255) not null unique,
    email varchar(255) not null unique,
    password_hash varchar(255) not null,
    created_at timestamp default current_timestamp
);

create table projects (
    id varchar(36) primary key,
    name varchar(255) not null,
    description text,
    owner_id varchar(36) not null,
    created_at timestamp default current_timestamp,
    foreign key (owner_id) references users(id)
);

create table errors (
    id varchar(36) primary key,
    project_id varchar(36) not null,
    user_id varchar(36) not null,
    error text not null,
    created_at timestamp default current_timestamp,
    foreign key (project_id) references projects(id),
    foreign key (user_id) references users(id)
);

INSERT INTO users (id, username, email, password_hash) VALUES ('0', 'root', 'kuzmichleva1@gmail.com', '1234');  
INSERT INTO projects (id, name, description, owner_id) VALUES ('0', 'Test Project', 'This is a test project', '0');  

-- fix primary key violation