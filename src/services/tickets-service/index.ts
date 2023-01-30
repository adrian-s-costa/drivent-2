import ticketRepository from "@/repositories/tickets-repository"

async function getAllTickets(){
    const tickets = await ticketRepository.getAllTickets();
    return tickets;
}

const ticketService = {
    getAllTickets
};

export default ticketService;