import parse from 'html-react-parser';

export default function formatText(title: string) {
    // eslint-disable-next-line no-useless-escape

    let formatedTitle = title;

    const orange = /~.*?~/gm;
    const items = title.match(orange);
    if (items) {
        items.forEach((item: any) => {
            item = item.split('~').join('');

            formatedTitle = formatedTitle.replace(
                '~' + item + '~',
                '<span style="color: #F9BB42">' + item + '</span>'
            );
        });
    }

    return parse(formatedTitle);
}
