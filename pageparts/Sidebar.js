import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import TwitterIcon from '@mui/icons-material/Twitter';
import  Container  from '@mui/material/Container';



export default function Sidebar(props) {
  const { archives, description, social, title } = props;

  return (
    <Container maxWidth="lg">
    <Grid sx={{ py: 6 }} item xs={12} md={4}>

      {/*<Paper
        align="center"
        elevation={3}
        maxWidth="350px"
        sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom>
          {sidebar.title}
        </Typography>
        <Typography>{sidebar.description}</Typography>
  </Paper>*/}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>

    
      {archives.map(({archive, title, url}, ) => (
        <Link display="block" variant="body1" href={archives.url} key={title} style={{ textDecoration: 'none' }}>
          {title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>


      {social.map((network, name, key) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
          style={{ textDecoration: 'none' }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    
    </Grid>
    </Container>
  );
}




Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};


