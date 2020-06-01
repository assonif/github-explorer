import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src="../../assets/logo.svg" alt="Logo" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/47827967?s=460&u=9b75f5ad04632bcb6245975ec0442ab66b770c80&v=4"
            alt="Fabio Furtado"
          />
          <div>
            <strong>assonif/novo-teste</strong>
            <p>Teste teste teste teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/47827967?s=460&u=9b75f5ad04632bcb6245975ec0442ab66b770c80&v=4"
            alt="Fabio Furtado"
          />
          <div>
            <strong>assonif/novo-teste</strong>
            <p>Teste teste teste teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/47827967?s=460&u=9b75f5ad04632bcb6245975ec0442ab66b770c80&v=4"
            alt="Fabio Furtado"
          />
          <div>
            <strong>assonif/novo-teste</strong>
            <p>Teste teste teste teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/47827967?s=460&u=9b75f5ad04632bcb6245975ec0442ab66b770c80&v=4"
            alt="Fabio Furtado"
          />
          <div>
            <strong>assonif/novo-teste</strong>
            <p>Teste teste teste teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/47827967?s=460&u=9b75f5ad04632bcb6245975ec0442ab66b770c80&v=4"
            alt="Fabio Furtado"
          />
          <div>
            <strong>assonif/novo-teste</strong>
            <p>Teste teste teste teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/47827967?s=460&u=9b75f5ad04632bcb6245975ec0442ab66b770c80&v=4"
            alt="Fabio Furtado"
          />
          <div>
            <strong>assonif/novo-teste</strong>
            <p>Teste teste teste teste</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
