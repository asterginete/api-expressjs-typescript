import { Request } from 'express';

interface PaginationResult {
  startIndex: number;
  endIndex: number;
  currentPage: number;
  totalPages: number;
}

const paginator = (req: Request, totalItems: number, itemsPerPage: number = 10): PaginationResult => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || itemsPerPage;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    startIndex,
    endIndex,
    currentPage: page,
    totalPages
  };
};

export default paginator;
