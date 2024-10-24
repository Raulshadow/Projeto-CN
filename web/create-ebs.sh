#!/bin/bash

nome_projeto=$1
if [ $nome_projeto = "" ]; then
	exit 1
fi

echo "Nome do projeto: $nome_projeto"

eb init -p docker $nome_projeto --region us-east-1
eb create $nome_projeto -sr LabRole -ip LabInstanceProfile -k vockey -c $nome_projeto -i t3a.medium --timeout 30
