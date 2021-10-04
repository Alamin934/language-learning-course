// import { useEffect } from 'react';
// import { useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import { useParams } from 'react-router';

// const CourseDetail = () => {
//     let { courseId } = useParams();
//     /* Load Fake JSON Data for ID */
//     const [course, setCourse] = useState([]);
//     console.log(course);
//     useEffect(() => {
//         fetch(`./fakeLanguageData.JSON/${courseId}`)
//             .then(res => res.json())
//             .then(data => setCourse(data))
//     }, [courseId]);
//     return (
//         <div>
//             <section>
//                 <Container>
//                     <Row>
//                         <Col>
//                             <div>
//                                 {/* <img src={courses[0].thumbnail} alt="" /> */}
//                                 <h1>This is single course page</h1>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>
//         </div>
//     );
// };

// export default CourseDetail;