from abc import ABC

from tkinter import Misc
from tkinter.ttk import Frame

class Component(ABC):
    def __init__(self, container: Misc) -> None:
        self.container = container
        self.frame: Frame = None

    def pack(self) -> None:
        self.frame.pack()   