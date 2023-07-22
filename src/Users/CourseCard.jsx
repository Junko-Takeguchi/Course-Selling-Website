import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
    const navigate = useNavigate();
    return (
        <Card style={{
            margin: 50,
            marginLeft: 100,
            width: 300,
            minHeight: 200,
        }}>
            <CardMedia
                sx={{ height: 140 }}
                image={course.imageLink}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {course.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {course.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => {
                        navigate("/users/course/" + course._id);
                    }}
                >
                    Buy Course
                </Button>
            </CardActions>
        </Card>
    );
}

export default CourseCard;
