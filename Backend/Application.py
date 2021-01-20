from flask import Flask


def create_app():
    app = Flask(__name__)
    from Pictures import pictures as pictures_blueprint
    app.register_blueprint(pictures_blueprint)

    return app


if __name__ == '__main__':
    application = create_app()
    application.run(debug=True)
