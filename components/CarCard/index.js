import Card, { CardContent, CardMedia, CardHeader } from 'material-ui/Card'
import { Avatar, Typography, Chip, Button } from 'material-ui'

import Comment from 'material-ui-icons/Comment'

import ThumbsUp from 'material-ui-icons/ThumbUp'

import styles from './index.scss'

export const CarCard = (props) => {
  return (
    <Card className={styles.carCardRoot}>
      <CardHeader
        avatar={
          <Avatar aria-label="profpic" className={styles.avatarPic}>
            R
          </Avatar>
        }
        title={props.owner}
        subheader="March 19, 2018"
      />
      <CardMedia className={styles.carPic} image={`${props.carPic}`} title={`image of ${props.carMake} ${props.carModel}`} />
      <CardContent className={styles.carCardContent}>
        <Typography className={styles.carInfo} variant="headline" >
          {`${props.carYear} ${props.carMake} ${props.carModel}`}
        </Typography>
        <Typography className={styles.carInfo} component="p">
          {props.carNote}
        </Typography>
      </CardContent>
      <div className={styles.carChipsRoot}>
        {props.tags.map(tag => <Chip className={styles.carChips} label={tag} key={tag}/>)}
      </div>
      {/* add in code to make this price div null on cars page but active on marketplace page
      <div>
        {`Price: $${props.price}`} 
      </div>
      */}
      <div className={styles.carActionsRoot}>
        <ThumbsUp className={styles.carAction} onClick={props.handleLike} />
        <Comment className={styles.carAction} onClick={props.handleComment} />
      </div>
    </Card>
  )
}
  