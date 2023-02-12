1. Добавить к компоненту LifeCyclesComponent параметр
   myContent и прикрепить к нему декоратор @ContentChild со значением ‘contentVariable’
2. В компоненте app-component.html поместить любой DOM-элемент и создать на нем шаблонную переменную
   #contentVariable
3. Сделать имплементацию от интерфейса AfterContentInit
4. Реализовать метод ngAfterContentInit
5. В хуке через консоль вывести сообщение ‘content init’ и сам параметр myContent
