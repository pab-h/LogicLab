class App(object):
    def __enter__(self):
        print("App ligado")
        return self
    
    def __exit__(self, exceptionType, exceptionValue, exceptionTraceback):
        print("App desligado")

    def run(self) -> None:
        raise NotImplementedError()
    