import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src="../../assets/logo.svg" alt="Logo" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="kjhgkih" alt="logo" />
          <div>
            <strong>ojsdoidjsods</strong>
            <p>doishodhsidhios</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>sdsdsds</strong>
            <span>sasasa</span>
          </li>
          <li>
            <strong>sdsdsds</strong>
            <span>sasasa</span>
          </li>
          <li>
            <strong>sdsdsds</strong>
            <span>sasasa</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link key="wsdsdsd" to="dsdsdsd">
          <div>
            <strong>dsdsdsd</strong>
            <p>dsfsdfsdfdsfsf</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
