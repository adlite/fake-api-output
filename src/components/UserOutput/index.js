// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import _get from 'lodash.get';
// Components
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
// Icons
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkIcon from '@material-ui/icons/Link';
// Styles
import style from './style.styl';

const UserOutput = ({ className, data }) => {
  const avatarLetter = _get(data, 'name[0]', '');

  return (
    <div className={cn(style.UserOutput, className)}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={3}>
          <Card className={style.UserOutput__card}>
            <CardContent>
              <Avatar className={style.UserOutput__avatar}>{avatarLetter}</Avatar>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className={style.UserOutput__card}>
            <CardContent>
              <Typography variant="display2" component="h1" gutterBottom>
                {data.name}
              </Typography>
              <Chip avatar={<Avatar>@</Avatar>} label={data.username} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card className={style.UserOutput__card}>
            <List>
              <a href={`tel:${data.email}`}>
                <ListItem>
                  <Avatar>
                    <PhoneIcon />
                  </Avatar>
                  <ListItemText primary={data.phone} secondary="Phone" />
                </ListItem>
              </a>
              <Divider inset component="li" />
              <a href={`mailto:${data.email}`}>
                <ListItem>
                  <Avatar>
                    <EmailIcon />
                  </Avatar>
                  <ListItemText primary={data.email} secondary="Email" />
                </ListItem>
              </a>
              <Divider inset component="li" />
              <a href={`//${data.website}`} target="_blank">
                <ListItem>
                  <Avatar>
                    <LinkIcon />
                  </Avatar>
                  <ListItemText primary={data.website} secondary="Website" />
                </ListItem>
              </a>
            </List>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

UserOutput.defaultProps = {
  className: '',
};

UserOutput.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
};

export default UserOutput;
