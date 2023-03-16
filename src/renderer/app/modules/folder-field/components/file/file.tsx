import React from 'react';

type FileProps = {
    title: string
}
const File = ({title}: FileProps) => {
    return (
        <div>
            <span>{title}</span>
        </div>
    );
};

export default File;