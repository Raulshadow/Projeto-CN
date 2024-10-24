# Como criar o projeto no Elastic Beanstalk?

1. Configure as suas credenciais da AWS.
2. Instale a CLI do Elastic Beanstalk (eb).
3. Inicie o ambiente e crie a aplicação

- Utilizando Linux e bash script.
```sh
./create-ebs.sh
```
ou
- Execute os seguintes comandos:
    - `eb init -p docker <nome do projeto> --region us-east-1`
    - `eb create <nome do projeto> -sr LabRole -ip LabInstanceProfile -k vockey -c <nome do projeto> -i t3a.medium --timeout 30`

# Como fazer o deploy do projeto?
- `eb depoloy`

# Configurações usadas
|Etapa  | Campo                  | Valor              |
|:-:    | :-                     | :-                 |
|1      | Role                   | LabRole            |
|1      | EC2 key pair           | Qualquer uma       |
|1      | EC2 instance profile   | LabInstanceProfile |
|4      | Instance Types         | t3a.medium         |
|5      | Manage updates         | Desmarcado         |
