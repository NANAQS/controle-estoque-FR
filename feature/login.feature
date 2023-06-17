Feature: Login Usuario
  Scenario: Credenciais Validas
    Given que o cliente informou credencias corretas
     When sistema solicitar o login
     Then o sistema deve enviar usuario para tela home
     And comparar se usuario e ADM ou Usuario Normal 

