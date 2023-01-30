import enrollmentRepository from "@/repositories/enrollment-repository";
import ticketRepository from "@/repositories/tickets-repository"
import { notFoundEnrollmentError } from "./errors";

async function getAllTickets(){
    const tickets = await ticketRepository.getAllTickets();
    return tickets;
}

export async function getTicketsTypes(userId:number) {
    return await ticketRepository.getTicketByUserId(userId);
}

export async function postTicketService(userId: number, ticketTypeId: number){
    
    const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
    if (!enrollment) {
      throw notFoundEnrollmentError();
    }

    const insertedTicket = await ticketRepository.insertTicket(ticketTypeId, enrollment.id);
    const insertedTicketData = await ticketRepository.findTicket(insertedTicket.id);
    return insertedTicketData;
  
}

const ticketService = {
    getAllTickets,
    getTicketsTypes,
    postTicketService
};

export default ticketService;