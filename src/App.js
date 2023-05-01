import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <>
      <h1 className='title ms-5 mt-3'>BSc (Hons) in Business Information Systems</h1>
      <div className='container'>
        <div className="row">
          <table className='table border-5 table-bottom-bordered p-5'>
            <thead>
              <tr>
                <th>Module Name</th>
                <th>Module Code</th>
                <th>Level</th>
                <th>Credit</th>
                <th>Session</th>
                <th>Attempt</th>
                <th>Mark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fundamentals of Programming</td>
                <td>4BUIS008C</td>
                <td>4</td>
                <td>20</td>
                <td>2022/20023</td>
                <td>1</td>
                <td className="text-decoration-underline text-danger">10</td>
              </tr>
              <tr>
                <td>Web Technology</td>
                <td>4BUIS011C-n</td>
                <td>4</td>
                <td>20</td>
                <td>2022/20023</td>
                <td>1</td>
                <td className="text-decoration-underline text-danger">20</td>
              </tr>
              <tr>
                <td>Computer Science Fundamentals</td>
                <td>4BUIS012C-n</td>
                <td>4</td>
                <td>20</td>
                <td>2022/20023</td>
                <td>1</td>
                <td className="text-decoration-underline text-danger">30</td>
              </tr>
              <tr>
                <td>Introduction to Statistics and Data Science</td>
                <td>4ECON006C-n</td>
                <td>4</td>
                <td>20</td>
                <td>2022/20023</td>
                <td>1</td>
                <td className="text-decoration-underline text-danger">40</td>
              </tr>
              <tr>
                <td>Introduction to Management Organitasional Beha</td>
                <td>4MNST001C-n</td>
                <td>4</td>
                <td>20</td>
                <td>2022/20023</td>
                <td>1</td>
                <td className="text-decoration-underline text-danger">50</td>
              </tr>
              <tr>
                <td>Graphic design</td>
                <td>4GPDS001C</td>
                <td>4</td>
                <td>20</td>
                <td>2022/20023</td>
                <td>1</td>
                <td className="text-decoration-underline text-danger">60</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>...</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Progressing:</th>
                <th>In progress</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Award:</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
