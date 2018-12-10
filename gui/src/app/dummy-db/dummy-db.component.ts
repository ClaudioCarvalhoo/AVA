import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../shared/service/pessoa.service';
import { MatriculaService } from '../shared/service/matricula.service';
import { RoteiroService } from '../shared/service/roteiro.service';
import { TurmaService } from '../shared/service/turma.service';
import { Pessoa } from '../shared/pessoa.model';
import { Roteiro } from '../shared/roteiro.model';
import { Turma } from '../shared/turma.model';
import { Questao } from '../shared/questao.model';
import { QuestaoRespondida } from '../shared/questaoresponida.model';
import { Status } from '../shared/status.model';
import { Avaliacao } from '../shared/avaliacao.model';
import { Meta } from '../shared/meta.model';

@Component({
  selector: 'app-dummy-db',
  templateUrl: './dummy-db.component.html',
  styleUrls: ['./dummy-db.component.css']
})
export class DummyDbComponent implements OnInit {

  constructor(
    private matriculaService: MatriculaService,
    private pessoaService: PessoaService,
    private roteiroService: RoteiroService,
    private turmaService: TurmaService,
    ) { }

  ngOnInit() {
    Promise.all([
      this.cadastrarPessoa('1', 'Mario', 'mvgmb@cin.ufpe.br', '1'),
      this.cadastrarPessoa('2', 'Gui', 'ggfl@cin.ufpe.br', '2'),
      this.cadastrarPessoa('3', 'Pedro', 'phts@cin.ufpe.br', '3'),
      this.cadastrarPessoa('4', 'Marcela', 'marcelinha@cin.ufpe.br', '4'),
      this.cadastrarPessoa('5', 'Kusko', 'king@cin.ufpe.br', '5'),
      this.cadastrarPessoa('6', 'Juliana', 'july@cin.ufpe.br', '6'),
    ])
    .then( () => {
      Promise.all([
        this.cadastrarRoteiro('1', 'Requisitos', '1'),
        this.cadastrarRoteiro('1', 'Gerencia de Requisitos', '2'),
        this.cadastrarRoteiro('1', 'Projeto e Implementação', '3'),
        this.cadastrarRoteiro('1', 'Testes', '4'),
      ])
      .then( () => {
        Promise.all([
          this.addQuestao('1', 'Questao 1', 'Resposta esperada 1'),
          this.addQuestao('1', 'Questao 2', 'Resposta esperada 2'),
          this.addQuestao('1', 'Questao 3', 'Resposta esperada 3'),
          this.addQuestao('1', 'Questao 4', 'Resposta esperada 4'),
          this.addQuestao('2', 'Questao 1', 'Resposta esperada 1'),
          this.addQuestao('2', 'Questao 2', 'Resposta esperada 2'),
          this.addQuestao('2', 'Questao 3', 'Resposta esperada 3'),
          this.addQuestao('2', 'Questao 4', 'Resposta esperada 4'),
          this.addQuestao('3', 'Questao 1', 'Resposta esperada 1'),
          this.addQuestao('3', 'Questao 2', 'Resposta esperada 2'),
          this.addQuestao('3', 'Questao 3', 'Resposta esperada 3'),
          this.addQuestao('3', 'Questao 4', 'Resposta esperada 4'),
          this.addQuestao('4', 'Questao 1', 'Resposta esperada 1'),
          this.addQuestao('4', 'Questao 2', 'Resposta esperada 2'),
          this.addQuestao('4', 'Questao 3', 'Resposta esperada 3'),
          this.addQuestao('4', 'Questao 4', 'Resposta esperada 4'),
        ])
        .then(() => {
          Promise.all([
            this.cadastrarTurma('Turma 1', '1'),
            this.cadastrarTurma('Turma 2', '5'),
          ])
          .then(() => {
            Promise.all([
              this.turmaService.addInstrutor('Turma 1', '2'),
              this.entrarTurma('3', 'Turma 1'),
              this.entrarTurma('4', 'Turma 1'),
              this.entrarTurma('6', 'Turma 2'),
            ])
            .then(() => {
              Promise.all([
                this.addAvaliacao('3','Turma 1', '1', 'Conceito 1', Meta.MPA),
                this.addAvaliacao('3','Turma 1', '2', 'Conceito 2', Meta.MA),
                this.addAvaliacao('3','Turma 1', '3', 'Conceito 3', Meta.MA),
                this.addAvaliacao('3','Turma 1', '4', 'Conceito 4', Meta.MA),
                this.addAvaliacao('4','Turma 1', '1', 'Conceito 1', Meta.MPA),
                this.addAvaliacao('4','Turma 1', '2', 'Conceito 2', Meta.MA),
                this.addAvaliacao('4','Turma 1', '3', 'Conceito 3', Meta.MA),
                this.addAvaliacao('4','Turma 1', '4', 'Conceito 4', Meta.MA),
                this.addAvaliacao('6','Turma 2', '1', 'Conceito 1', Meta.MPA),
                this.addAvaliacao('6','Turma 2', '2', 'Conceito 2', Meta.MANA),
                this.addAvaliacao('6','Turma 2', '3', 'Conceito 3', Meta.MANA),
                this.addAvaliacao('6','Turma 2', '4', 'Conceito 4', Meta.MA),
              ])
              .then(() => {
                Promise.all([
                  this.turmaService.addRoteiro('Turma 1', '1'),
                  this.turmaService.addRoteiro('Turma 1', '2'),
                  this.turmaService.addRoteiro('Turma 1', '3'),
                  this.turmaService.addRoteiro('Turma 1', '4'),
                  this.turmaService.addRoteiro('Turma 2', '1'),
                  this.turmaService.addRoteiro('Turma 2', '2'),
                  this.turmaService.addRoteiro('Turma 2', '3'),
                  this.turmaService.addRoteiro('Turma 2', '4'),
                ])
                .then(() => {
                  const qr = new QuestaoRespondida;
                  qr.pergunta = "Pergunta 1";
                  qr.resposta = "Resposta 1";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '1', 1, qr);
                  qr.pergunta = "Pergunta 1";
                  qr.resposta = "Resposta 1";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '2', 1, qr);
                  qr.pergunta = "Pergunta 1";
                  qr.resposta = "Resposta 1";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '3', 1, qr);
                  qr.pergunta = "Pergunta 1";
                  qr.resposta = "Resposta 1";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '4', 1, qr);

                  qr.pergunta = "Pergunta 1";
                  qr.resposta = "Resposta 1";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '1', 1, qr);
                  qr.pergunta = "Pergunta 1";
                  qr.resposta = "Resposta 1";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '2', 1, qr);
                  qr.pergunta = "Pergunta 1";
                  qr.resposta = "Resposta 1";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '3', 1, qr);
                  qr.pergunta = "Pergunta 1";
                  qr.resposta = "Resposta 1";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '4', 1, qr);
                  
                  qr.pergunta = "Pergunta 1";
                  qr.resposta = "Resposta 1";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '1', 1, qr);
                  qr.pergunta = "Pergunta 1";
                  qr.resposta = "Resposta 1";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '2', 1, qr);
                  qr.pergunta = "Pergunta 1";
                  qr.resposta = "Resposta 1";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '3', 1, qr);
                  qr.pergunta = "Pergunta 1";
                  qr.resposta = "Resposta 1";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '4', 1, qr);
                  
                  // ------------------------------------------------------------------------

                  qr.pergunta = "Pergunta 2";
                  qr.resposta = "Resposta 2";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '1', 2, qr);
                  qr.pergunta = "Pergunta 2";
                  qr.resposta = "Resposta 2";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '2', 2, qr);
                  qr.pergunta = "Pergunta 2";
                  qr.resposta = "Resposta 2";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '3', 2, qr);
                  qr.pergunta = "Pergunta 2";
                  qr.resposta = "Resposta 2";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '4', 2, qr);

                  qr.pergunta = "Pergunta 2";
                  qr.resposta = "Resposta 2";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '1', 2, qr);
                  qr.pergunta = "Pergunta 2";
                  qr.resposta = "Resposta 2";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '2', 2, qr);
                  qr.pergunta = "Pergunta 2";
                  qr.resposta = "Resposta 2";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '3', 2, qr);
                  qr.pergunta = "Pergunta 2";
                  qr.resposta = "Resposta 2";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '4', 2, qr);
                  
                  qr.pergunta = "Pergunta 2";
                  qr.resposta = "Resposta 2";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '1', 2, qr);
                  qr.pergunta = "Pergunta 2";
                  qr.resposta = "Resposta 2";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '2', 2, qr);
                  qr.pergunta = "Pergunta 2";
                  qr.resposta = "Resposta 2";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '3', 2, qr);
                  qr.pergunta = "Pergunta 2";
                  qr.resposta = "Resposta 2";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '4', 2, qr);

                  // ------------------------------------------------------------------------

                  qr.pergunta = "Pergunta 3";
                  qr.resposta = "Resposta 3";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '1', 3, qr);
                  qr.pergunta = "Pergunta 3";
                  qr.resposta = "Resposta 3";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '2', 3, qr);
                  qr.pergunta = "Pergunta 3";
                  qr.resposta = "Resposta 3";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '3', 3, qr);
                  qr.pergunta = "Pergunta 3";
                  qr.resposta = "Resposta 3";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '4', 3, qr);

                  qr.pergunta = "Pergunta 3";
                  qr.resposta = "Resposta 3";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '1', 3, qr);
                  qr.pergunta = "Pergunta 3";
                  qr.resposta = "Resposta 3";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '2', 3, qr);
                  qr.pergunta = "Pergunta 3";
                  qr.resposta = "Resposta 3";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '3', 3, qr);
                  qr.pergunta = "Pergunta 3";
                  qr.resposta = "Resposta 3";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '4', 3, qr);
                  
                  qr.pergunta = "Pergunta 3";
                  qr.resposta = "Resposta 3";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '1', 3, qr);
                  qr.pergunta = "Pergunta 3";
                  qr.resposta = "Resposta 3";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '2', 3, qr);
                  qr.pergunta = "Pergunta 3";
                  qr.resposta = "Resposta 3";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '3', 3, qr);
                  qr.pergunta = "Pergunta 3";
                  qr.resposta = "Resposta 3";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '4', 3, qr);

                  // ------------------------------------------------------------------------

                  qr.pergunta = "Pergunta 4";
                  qr.resposta = "Resposta 4";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '1', 4, qr);
                  qr.pergunta = "Pergunta 4";
                  qr.resposta = "Resposta 4";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '2', 4, qr);
                  qr.pergunta = "Pergunta 4";
                  qr.resposta = "Resposta 4";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '3', 4, qr);
                  qr.pergunta = "Pergunta 4";
                  qr.resposta = "Resposta 4";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('3', 'Turma 1', '4', 4, qr);

                  qr.pergunta = "Pergunta 4";
                  qr.resposta = "Resposta 4";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '1', 4, qr);
                  qr.pergunta = "Pergunta 4";
                  qr.resposta = "Resposta 4";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '2', 4, qr);
                  qr.pergunta = "Pergunta 4";
                  qr.resposta = "Resposta 4";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '3', 4, qr);
                  qr.pergunta = "Pergunta 4";
                  qr.resposta = "Resposta 4";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '4', 4, qr);
                  
                  qr.pergunta = "Pergunta 4";
                  qr.resposta = "Resposta 4";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '1', 4, qr);
                  qr.pergunta = "Pergunta 4";
                  qr.resposta = "Resposta 4";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '2', 4, qr);
                  qr.pergunta = "Pergunta 4";
                  qr.resposta = "Resposta 4";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '3', 4, qr);
                  qr.pergunta = "Pergunta 4";
                  qr.resposta = "Resposta 4";
                  qr.status = Status.Concluida;
                  qr.tempo = 1233;
                  this.matriculaService.addQuestaoRespondida('6', 'Turma 2', '4', 4, qr);


                  
                })
              })
            })
          })
        })
      })
    });    

    
    
    const qr = new QuestaoRespondida;
    qr.pergunta = "Pergunta 1";
    qr.resposta = "Resposta 1";
    qr.status = Status.Concluida;
    qr.tempo = 1233;

    this.matriculaService.addQuestaoRespondida('4', 'Turma 1', '3', 2, qr);






  }
  // ***************
  // *  MATRICULA  *
  // ***************
  public entrarTurma(cpfAluno: string, turmaId: string): Promise<any> {
    return this.matriculaService.addMatricula(cpfAluno, turmaId).then( () => {
        this.turmaService.addAluno(turmaId, cpfAluno);
      }
    );
  }

  public addAvaliacao(cpf: string,turmaId: string, roteiro: string, conceito: string, meta: Meta): Promise<any> {
    const a = new Avaliacao;
    a.conceito = conceito;
    a.meta = meta;
    return this.matriculaService.addAvaliacao(cpf, turmaId,roteiro,a);
  }
  
  // ****************
  // *    PESSOA    * 
  // ****************
  cadastrarPessoa(cpf:string, nome:string, email:string, senha:string): Promise<any> {
    const pessoa = new Pessoa;
    pessoa.cpf = cpf;
    pessoa.nome = nome;
    pessoa.email = email;
    pessoa.senha = senha;

    return this.pessoaService.addPessoa(pessoa);
  }

  // ***************
  // *   ROTEIRO   * 
  // ***************

  cadastrarRoteiro(donoCpf: string, nome: string, id: string): Promise<any> {
    const roteiro = new Roteiro;
    roteiro.donoCpf = donoCpf;
    roteiro.nome = nome;
    roteiro.id = id;
    return this.roteiroService.addRoteiro(roteiro);
  }

  addQuestao(roteiroId: string, pergunta: string, respostaEsperada: string): Promise<any> {
    const q = new Questao;
    q.pergunta = pergunta;
    q.respostaEsperada = respostaEsperada;
    return this.roteiroService.addQuestao(roteiroId, q);
  }

  // getRoteirosDono(donoCpf: string) {
  //   console.log(this.roteiroService.getRoteirosDono(donoCpf));
  // }

  // ***************
  // *    TURMA    * 
  // ***************

  cadastrarTurma(turmaId: string, creatorCpf: string): Promise<any> {
    return this.turmaService.addTurma(turmaId, creatorCpf);
  }

}
