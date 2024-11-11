import { Component } from '@angular/core';
import { HeaderComponent } from './componentes/header/header.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { TarefaComponent } from './componentes/tarefa/tarefa.component';
import { FooterComponent } from './componentes/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,UsuarioComponent,TarefaComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoApp';
}
