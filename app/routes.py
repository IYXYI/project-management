from flask import Blueprint, render_template

bp = Blueprint("main", __name__)

@bp.route("/")
def home():
    return render_template("index.html")

@bp.route("/projects")
def projects():
    # You can pass dynamic data to templates using context variables
    project_list = [
        {"name": "Project A", "status": "In Progress"},
        {"name": "Project B", "status": "Completed"},
    ]
    return render_template("projects.html", projects=project_list)

@bp.route("/about")
def about():
    return render_template("about.html")
