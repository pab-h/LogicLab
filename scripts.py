import subprocess

from logiclab.app import app

def test() -> None:
    subprocess.run(
        ['python', '-u', '-m', 'unittest', 'discover']
    )

def start() -> None:
    app.run()

def dev() -> None:
    app.run(debug=True)