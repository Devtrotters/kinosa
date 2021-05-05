import formatText from 'lib/formatText';
import {
    Bubules,
    CitationAuthor,
    CitationContainer,
    CitationText
} from 'styles/Concept/Citation.styles';

export default function Citation({ data }) {
    return (
        <section>
            <CitationContainer>
                <Bubules>
                    <svg
                        data-v-cf4306f2=""
                        width="46"
                        height="47"
                        viewBox="0 0 46 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <ellipse
                            data-v-cf4306f2=""
                            cx="23"
                            cy="23.8315"
                            rx="23"
                            ry="22.9931"
                            fill="#F9BB42"></ellipse>
                    </svg>
                    <svg
                        data-v-cf4306f2=""
                        width="46"
                        height="47"
                        viewBox="0 0 46 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <ellipse
                            data-v-cf4306f2=""
                            cx="23"
                            cy="23.8315"
                            rx="23"
                            ry="22.9931"
                            fill="#F9BB42"></ellipse>
                    </svg>
                </Bubules>
                <aside>
                    <CitationText>{formatText(data.citation)}</CitationText>
                    <CitationAuthor>{formatText(data.auteur)}</CitationAuthor>
                </aside>
                <Bubules>
                    <svg
                        data-v-cf4306f2=""
                        width="46"
                        height="47"
                        viewBox="0 0 46 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <ellipse
                            data-v-cf4306f2=""
                            cx="23"
                            cy="23.8315"
                            rx="23"
                            ry="22.9931"
                            fill="#F9BB42"></ellipse>
                    </svg>
                    <svg
                        data-v-cf4306f2=""
                        width="46"
                        height="47"
                        viewBox="0 0 46 47"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <ellipse
                            data-v-cf4306f2=""
                            cx="23"
                            cy="23.8315"
                            rx="23"
                            ry="22.9931"
                            fill="#F9BB42"></ellipse>
                    </svg>
                </Bubules>
            </CitationContainer>
        </section>
    );
}
