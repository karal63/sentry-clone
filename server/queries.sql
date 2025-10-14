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

INSERT INTO users (id, username, email, password_hash) VALUES ('0', 'root', 'kuzmichleva1@gmail.com', '1234');  
INSERT INTO projects (id, name, platform, owner_id) VALUES ('0', 'Test Project', 'VUE', '0');  

-- fix primary key violation

DELETE FROM users
WHERE id = '1a15c12b-3b63-4b9c-8b52-eee3db77f569'
  OR id = '0feb5eb5-ce50-47ae-97b5-ac98e4360d2a'
  OR id = 'aae0f3b4-adbf-432a-aecd-4ae4f9192372';

--   created protected route and middleware for verifying token

CREATE TABLE issues (
    id VARCHAR(36) PRIMARY KEY,
    project_id VARCHAR(36) NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    culprit VARCHAR(255),
    level VARCHAR(50) CHECK (level IN ('error','warning','info','fatal')),
    type VARCHAR(100),
    message TEXT,
    status VARCHAR(50) DEFAULT 'unresolved' CHECK (status IN ('unresolved','resolved','ignored','muted')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


    -- first_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- occurrences INTEGER DEFAULT 1,
    -- assigned_to BIGINT REFERENCES users(id),
    -- updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    INSERT INTO issues (id, project_id, title, culprit, level, type, message) VALUES (
        'testid2', '1', 'Example name (optional)', 'addPhoto(src/components/photo/PhotoForm)', 'error', 'TypeError', 'Failed to execute "readAsDataURL" on "FileReader": parameter 1 is not of type "Blob".'
    );