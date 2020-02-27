import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/dashboard">
            <Button type="primary" style={{ width: '200px' }}>
              Back Home
            </Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;
