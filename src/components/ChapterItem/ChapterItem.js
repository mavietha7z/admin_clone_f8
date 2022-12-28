function ChapterItem({ lesson }) {
    return (
        <tbody>
            {lesson.length > 0 &&
                lesson.map((lesson, index) => (
                    <tr style={{ fontWeight: 600 }} key={index}>
                        <td style={{ padding: '12px 50px', width: '80%' }}>
                            <a
                                className="text-dark"
                                href={`https://www.youtube.com/watch?v=${lesson.urlVideo}`}
                                target="_blank"
                                rel="noreferrer"
                            >{`${index + 1}. ${lesson.nameLesson}`}</a>
                        </td>
                        <td>{lesson.timeVideo}</td>
                    </tr>
                ))}
        </tbody>
    );
}

export default ChapterItem;
