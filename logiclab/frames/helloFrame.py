from tkinter import Misc

import tkinter.ttk as ttk

class HelloFrame(ttk.Frame):
    def __init__(self, container: Misc) -> None:
        super().__init__(container)

        self.helloLabel = ttk.Label(
            master = self, 
            text = "Hello, galerinha"
        )
        self.helloLabel.pack()

        self.infolabel = ttk.Label(
            master = self, 
            text = "Classe mostrando como aplicar orientação a objetos ao tkinter!!!"
        )
        self.infolabel.pack()

        self.frameInfolabel = ttk.Label(
            master = self, 
            text = "A pasta \"frames\" são os componentes da nossa interface. Pode-se criar frames aninhados"
        )
        self.frameInfolabel.pack()

        self.fischerlabel = ttk.Label(
            master = self, 
            text = "Lembrem-se do nosso Pai Fischer: Utilizem orientação a objeto a favor de vocês."
        )
        self.fischerlabel.pack()

        self.pack()
