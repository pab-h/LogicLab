import tkinter as tk

from logiclab.frames.example import Example

class App(tk.Tk):
    def __init__(self) -> None:
        super().__init__()

        self.title("LogicLab")
        self.geometry("1280x720")
        self.resizable(False, False)
        self.iconphoto(
            True,
            tk.PhotoImage(file = "assets/logo.png")
        )
        
        self.example = Example(self)
        self.example.pack()

    def __enter__(self):
        print("Carregando todos os recursos....")
        return self
    
    def __exit__(self, exceptionType, exceptionValue, exceptionTraceback):
        print("App desligado")

    def run(self) -> None:
        self.mainloop()
    