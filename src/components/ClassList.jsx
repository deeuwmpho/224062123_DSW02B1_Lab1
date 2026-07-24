import ClassCard from "./ClassCard";

function ClassList(props) {
    return (
        <div>
            {props.classes.map(function (item) {
                return (
                    <ClassCard
                        key={item.id}
                        classData={item}
                        bookClass={props.bookClass}
                    />
                );
            })}
        </div>
    );
}

export default ClassList;