import subprocess

from main import main

def test() -> None:
    subprocess.run(
        ['python', '-u', '-m', 'unittest', 'discover']
    )

def start() -> None:
    main()
