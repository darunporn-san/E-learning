CREATE TABLE "users" (
  "id" "UUID" PRIMARY KEY,
  "email" "VARCHAR(255)" UNIQUE NOT NULL,
  "username" "VARCHAR(100)" UNIQUE NOT NULL,
  "first_name" "VARCHAR(100)",
  "last_name" "VARCHAR(100)",
  "avatar_url" "TEXT",
  "bio" "TEXT",
  "role" "ENUM" NOT NULL,
  "is_active" "BOOLEAN" DEFAULT true,
  "created_at" "TIMESTAMP" DEFAULT (now()),
  "updated_at" "TIMESTAMP" DEFAULT (now())
);

CREATE TABLE "categories" (
  "id" "UUID" PRIMARY KEY,
  "name" "VARCHAR(100)" NOT NULL,
  "slug" "VARCHAR(100)" UNIQUE NOT NULL,
  "description" "TEXT",
  "icon" "VARCHAR(50)",
  "parent_id" "UUID",
  "sort_order" "INTEGER" DEFAULT 0,
  "created_at" "TIMESTAMP" DEFAULT (now())
);

CREATE TABLE "courses" (
  "id" "UUID" PRIMARY KEY,
  "title" "VARCHAR(255)" NOT NULL,
  "slug" "VARCHAR(255)" UNIQUE NOT NULL,
  "description" "TEXT" NOT NULL,
  "thumbnail_url" "TEXT" NOT NULL,
  "trailer_url" "TEXT",
  "instructor_id" "UUID" NOT NULL,
  "category_id" "UUID" NOT NULL,
  "level" "ENUM" NOT NULL,
  "language" "VARCHAR(10)" DEFAULT 'en',
  "price" "DECIMAL(10,2)" DEFAULT 0,
  "duration_hours" "INTEGER" DEFAULT 0,
  "total_lessons" "INTEGER" DEFAULT 0,
  "is_published" "BOOLEAN" DEFAULT false,
  "created_at" "TIMESTAMP" DEFAULT (now()),
  "updated_at" "TIMESTAMP" DEFAULT (now())
);

CREATE TABLE "sections" (
  "id" "UUID" PRIMARY KEY,
  "course_id" "UUID" NOT NULL,
  "title" "VARCHAR(255)" NOT NULL,
  "description" "TEXT",
  "sort_order" "INTEGER" DEFAULT 0,
  "is_published" "BOOLEAN" DEFAULT false,
  "created_at" "TIMESTAMP" DEFAULT (now()),
  "updated_at" "TIMESTAMP" DEFAULT (now())
);

CREATE TABLE "lessons" (
  "id" "UUID" PRIMARY KEY,
  "section_id" "UUID" NOT NULL,
  "title" "VARCHAR(255)" NOT NULL,
  "description" "TEXT",
  "content_type" "ENUM" NOT NULL,
  "video_url" "TEXT",
  "duration_minutes" "INTEGER" DEFAULT 0,
  "sort_order" "INTEGER" DEFAULT 0,
  "is_free" "BOOLEAN" DEFAULT false,
  "is_published" "BOOLEAN" DEFAULT false,
  "created_at" "TIMESTAMP" DEFAULT (now()),
  "updated_at" "TIMESTAMP" DEFAULT (now())
);

CREATE TABLE "enrollments" (
  "id" "UUID" PRIMARY KEY,
  "user_id" "UUID" NOT NULL,
  "course_id" "UUID" NOT NULL,
  "enrollment_date" "TIMESTAMP" DEFAULT (now()),
  "completion_date" "TIMESTAMP",
  "progress_percentage" "DECIMAL(5,2)" DEFAULT 0,
  "status" "ENUM" DEFAULT 'active',
  "payment_status" "ENUM" DEFAULT 'pending',
  "last_accessed" "TIMESTAMP"
);

CREATE TABLE "user_progress" (
  "id" "UUID" PRIMARY KEY,
  "user_id" "UUID" NOT NULL,
  "lesson_id" "UUID" NOT NULL,
  "completion_percentage" "DECIMAL(5,2)" DEFAULT 0,
  "watch_time_seconds" "INTEGER" DEFAULT 0,
  "is_completed" "BOOLEAN" DEFAULT false,
  "first_accessed" "TIMESTAMP" DEFAULT (now()),
  "last_accessed" "TIMESTAMP" DEFAULT (now()),
  "completed_at" "TIMESTAMP"
);

CREATE TABLE "reviews" (
  "id" "UUID" PRIMARY KEY,
  "user_id" "UUID" NOT NULL,
  "course_id" "UUID" NOT NULL,
  "rating" "INTEGER" NOT NULL,
  "comment" "TEXT",
  "is_public" "BOOLEAN" DEFAULT true,
  "created_at" "TIMESTAMP" DEFAULT (now()),
  "updated_at" "TIMESTAMP" DEFAULT (now())
);

CREATE TABLE "quizzes" (
  "id" "UUID" PRIMARY KEY,
  "lesson_id" "UUID" NOT NULL,
  "title" "VARCHAR(255)" NOT NULL,
  "description" "TEXT",
  "passing_score" "INTEGER" DEFAULT 70,
  "time_limit_minutes" "INTEGER",
  "attempts_allowed" "INTEGER" DEFAULT 3,
  "is_required" "BOOLEAN" DEFAULT false,
  "created_at" "TIMESTAMP" DEFAULT (now())
);

CREATE TABLE "quiz_questions" (
  "id" "UUID" PRIMARY KEY,
  "quiz_id" "UUID" NOT NULL,
  "question_text" "TEXT" NOT NULL,
  "question_type" "ENUM" NOT NULL,
  "options" "JSON",
  "correct_answer" "TEXT" NOT NULL,
  "points" "INTEGER" DEFAULT 1,
  "sort_order" "INTEGER" DEFAULT 0
);

CREATE TABLE "quiz_attempts" (
  "id" "UUID" PRIMARY KEY,
  "user_id" "UUID" NOT NULL,
  "quiz_id" "UUID" NOT NULL,
  "score" "INTEGER" DEFAULT 0,
  "max_score" "INTEGER" NOT NULL,
  "answers" "JSON" NOT NULL,
  "started_at" "TIMESTAMP" DEFAULT (now()),
  "completed_at" "TIMESTAMP"
);

CREATE TABLE "lesson_resources" (
  "id" "UUID" PRIMARY KEY,
  "lesson_id" "UUID" NOT NULL,
  "title" "VARCHAR(255)" NOT NULL,
  "file_url" "TEXT" NOT NULL,
  "file_type" "VARCHAR(50)" NOT NULL,
  "file_size" "BIGINT" DEFAULT 0,
  "download_count" "INTEGER" DEFAULT 0,
  "created_at" "TIMESTAMP" DEFAULT (now())
);

CREATE TABLE "certificate_templates" (
  "id" "UUID" PRIMARY KEY,
  "name" "VARCHAR(255)" NOT NULL,
  "template_data" "JSON" NOT NULL,
  "is_active" "BOOLEAN" DEFAULT true,
  "created_at" "TIMESTAMP" DEFAULT (now())
);

CREATE TABLE "certificates" (
  "id" "UUID" PRIMARY KEY,
  "enrollment_id" "UUID" NOT NULL,
  "certificate_number" "VARCHAR(100)" UNIQUE NOT NULL,
  "issued_date" "TIMESTAMP" DEFAULT (now()),
  "template_id" "UUID" NOT NULL,
  "pdf_url" "TEXT",
  "verification_url" "TEXT" NOT NULL
);

COMMENT ON TABLE "users" IS 'Main user accounts (students, instructors, admins)';

COMMENT ON COLUMN "users"."role" IS 'student, instructor, admin';

COMMENT ON TABLE "categories" IS 'Course categories and subcategories';

COMMENT ON TABLE "courses" IS 'Course information and metadata';

COMMENT ON COLUMN "courses"."level" IS 'beginner, intermediate, advanced';

COMMENT ON TABLE "sections" IS 'Course sections/modules organization';

COMMENT ON TABLE "lessons" IS 'Individual lessons/lectures within sections';

COMMENT ON COLUMN "lessons"."content_type" IS 'video, text, quiz, assignment';

COMMENT ON TABLE "enrollments" IS 'User course enrollments and status';

COMMENT ON COLUMN "enrollments"."status" IS 'active, completed, cancelled, suspended';

COMMENT ON COLUMN "enrollments"."payment_status" IS 'pending, paid, failed, refunded';

COMMENT ON TABLE "user_progress" IS 'Individual lesson progress tracking';

COMMENT ON TABLE "reviews" IS 'Course reviews and ratings';

COMMENT ON COLUMN "reviews"."rating" IS '1-5 stars';

COMMENT ON TABLE "quizzes" IS 'Quizzes and assessments';

COMMENT ON TABLE "quiz_questions" IS 'Individual quiz questions';

COMMENT ON COLUMN "quiz_questions"."question_type" IS 'multiple_choice, true_false, short_answer, essay';

COMMENT ON COLUMN "quiz_questions"."options" IS 'For multiple choice questions';

COMMENT ON TABLE "quiz_attempts" IS 'User quiz attempt records';

COMMENT ON COLUMN "quiz_attempts"."answers" IS 'User answers for each question';

COMMENT ON TABLE "lesson_resources" IS 'Downloadable resources for lessons';

COMMENT ON TABLE "certificate_templates" IS 'Certificate design templates';

COMMENT ON COLUMN "certificate_templates"."template_data" IS 'Certificate design and layout data';

COMMENT ON TABLE "certificates" IS 'Course completion certificates';

ALTER TABLE "courses" ADD FOREIGN KEY ("instructor_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE "courses" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id") ON DELETE RESTRICT;

ALTER TABLE "categories" ADD FOREIGN KEY ("parent_id") REFERENCES "categories" ("id") ON DELETE CASCADE;

ALTER TABLE "sections" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE CASCADE;

ALTER TABLE "lessons" ADD FOREIGN KEY ("section_id") REFERENCES "sections" ("id") ON DELETE CASCADE;

ALTER TABLE "enrollments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE "enrollments" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE CASCADE;

ALTER TABLE "user_progress" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE "user_progress" ADD FOREIGN KEY ("lesson_id") REFERENCES "lessons" ("id") ON DELETE CASCADE;

ALTER TABLE "reviews" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE "reviews" ADD FOREIGN KEY ("course_id") REFERENCES "courses" ("id") ON DELETE CASCADE;

ALTER TABLE "quizzes" ADD FOREIGN KEY ("lesson_id") REFERENCES "lessons" ("id") ON DELETE CASCADE;

ALTER TABLE "quiz_questions" ADD FOREIGN KEY ("quiz_id") REFERENCES "quizzes" ("id") ON DELETE CASCADE;

ALTER TABLE "quiz_attempts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE "quiz_attempts" ADD FOREIGN KEY ("quiz_id") REFERENCES "quizzes" ("id") ON DELETE CASCADE;

ALTER TABLE "lesson_resources" ADD FOREIGN KEY ("lesson_id") REFERENCES "lessons" ("id") ON DELETE CASCADE;

ALTER TABLE "certificates" ADD FOREIGN KEY ("enrollment_id") REFERENCES "enrollments" ("id") ON DELETE CASCADE;

ALTER TABLE "certificates" ADD FOREIGN KEY ("template_id") REFERENCES "certificate_templates" ("id") ON DELETE RESTRICT;
