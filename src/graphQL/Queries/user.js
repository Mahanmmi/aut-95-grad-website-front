import gql from 'graphql-tag'

/*export const ALL_LINKS_QUERY = gql`
    query {
        feed {
            links {
                id
                createdAt
                url
                description
            }
        }
    }
`;*/
export const getUser = gql`
    query getUser($studentNumber: String!){
        getSingleUser(studentNumber: $studentNumber) {
            user {
                firstName,
                lastName,
                autMail,
                studentNumber,
                birthday,
                profilePicture {
                    alternateText,
                    path
                }
            }
        }
    }
`;

export const loginMutation = gql`
    mutation loginMutation($autEmail: String!, $username: String!) {
        AutLogin(autEmail: $autEmail, studentNumber: $username) {
            firstName,
            lastName,
            studentNumber
        }
    }
`;
