from logiclab.frames.component import Component

from tkinter import Misc
from tkinter.ttk import Frame
from tkinter.ttk import Label

class Example(Component):
    def __init__(self, container: Misc) -> None:
        super().__init__(container)

        # Lembrem-se de sempre inicializar a propriedade Frame

        self.frame = Frame(self.container)
        
        self.avisoFoda = Label(
            master = self.frame, 
            text = "Aviso foda",
            background = "red"
        )
        self.avisoFoda.pack()
