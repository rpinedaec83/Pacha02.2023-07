// Archivo que contiene los websockets y los eventos
import Note from './models/note';

export default (io) => {
    io.on('connection', (socket) => {
        console.log('New user connected');
        const emitNotes = async () => {
            const notes = await Note.find();
            io.emit('server:loadnotes', notes);
        }
        emitNotes();

        socket.on('client:newnote', async (data) => {
            const newNote = new Note(data);
            const savedNote = await newNote.save();
            io.emit('server:newnotes', savedNote);
            emitNotes();
        });

        socket.on('client:deletenote', async (id) => {
            await Note.findByIdAndDelete(id);
            emitNotes();
        });

        socket.on('client:getnote', async (id) => {
            const note = await Note.findById(id);
            io.emit('server:selectednote', note);
        });

        socket.on('client:updatenote', async (updatedNote) => {
            await Note.findByIdAndUpdate(updatedNote._id, {
                title: updatedNote.title,
                description: updatedNote.description
            });
            emitNotes();
        });
    });
};
