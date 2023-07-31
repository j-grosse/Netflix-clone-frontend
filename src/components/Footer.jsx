import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const footerStyles = {
  left: 0,
  bottom: 0,
  width: '100%',
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © WATCHFLIX'} {new Date().getFullYear()}
      <br />
      <Link color="inherit" href="/">
        {/* WatchFlix */}
      </Link>
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <footer>
      <Box
        component="footer"
        sx={{ bgcolor: 'primary.main', py: 4 }}
        style={footerStyles}
      >
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            {description}
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
