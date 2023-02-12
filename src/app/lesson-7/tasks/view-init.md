1. Добавить к компоненту LifeCyclesComponent параметр
   myView и прикрепить к нему декоратор @ViewChild со значением ‘viewVariable’
2. В компоненте lifecycle-component.html поместить любой DOM-элемент и создать на нем шаблонную переменную
   #viewVariable
3. Сделать имплементацию от интерфейса AfterViewInit
4. Реализовать метод ngAfterViewInit
5. В хуке через консоль вывести сообщение view init’ и сам параметр myView
