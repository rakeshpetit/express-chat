const socket = io()

socket.on('connect', () => {
    console.log('Connected to server')

    socket.emit('createMessage', {
        from: 'Client',
        text: 'Yo man message from client'
    })
})

socket.on('disconnect', () => {
    console.log('Disconnected from server')
})

socket.on('newMessage', (message) => {
    console.log('New message from server', message)
})