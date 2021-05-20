from flask import Flask

import config


def create_app():
    app = Flask(__name__)
    app.config.from_object(config)

    from .views import memo_views
    app.register_blueprint(memo_views.bp)
    return app
