import React, { useState, useEffect } from 'react';
import { getGitHubRepos } from '../utils/githubApi.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Portfolio = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const githubUsername = 'garym636'; // Your GitHub username
        const repositories = await getGitHubRepos(githubUsername);
        setRepos(repositories);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <Container>
      <h2 className="glitch layers" data-glitch="MY PORTFOLIO"><span>MY PORTFOLIO</span></h2>
      <Row>
        {repos.map((repo, index) => (
          <Col key={repo.id} s="12" md="6" lg="6" className="hov swoop-in">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <div className='augconfig-p' data-augmented-ui="tl-clip br-2-clip-x border">
                <h4>{repo.name}</h4>
                <p></p>
              </div>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
