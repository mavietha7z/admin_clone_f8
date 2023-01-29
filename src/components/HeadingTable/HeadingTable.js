function HeadingTable({ headings = [] }) {
    return (
        <thead>
            <tr>
                {headings.map((heading, index) => (
                    <th key={index}>
                        <div className="text-center">{heading.title}</div>
                    </th>
                ))}
            </tr>
        </thead>
    );
}

export default HeadingTable;
