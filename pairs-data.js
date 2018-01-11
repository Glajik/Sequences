import { cons as consPair, car, cdr } from './pairs';

export const cons = (value, list) => consPair(value, list);

export const l = (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) => {
	const endOfList = cons(null, null);
	const listA = cons(a, endOfList);
	const listB = cons(b, listA);
	const listC = cons(c, listB);
	const listD = cons(d, listC);
	const listE = cons(e, listD);
	const listF = cons(f, listE);
	const listG = cons(g, listF);
	const listH = cons(h, listG);
	const listI = cons(i, listH);
	const listJ = cons(j, listI);
	const listK = cons(k, listJ);
	const listL = cons(l, listK);
	const listM = cons(m, listL);
	const listN = cons(n, listM);
	const listO = cons(o, listN);
	const listP = cons(p, listO);
	const listQ = cons(q, listP);
	const listR = cons(r, listQ);
	const listS = cons(s, listR);
	const listT = cons(t, listS);
	const listU = cons(u, listT);
	const listV = cons(v, listU);
	const listW = cons(w, listV);
	const listX = cons(x, listW);
	const listY = cons(y, listX);
	const listZ = cons(z, listY);

	if (a === undefined) return endOfList;
	if (b === undefined) return listA;
	if (c === undefined) return listB;
	if (d === undefined) return listC;
	if (e === undefined) return listD;
	if (f === undefined) return listE;
	if (g === undefined) return listF;
	if (h === undefined) return listG;
	if (i === undefined) return listH;
	if (j === undefined) return listI;
	if (k === undefined) return listJ;
	if (l === undefined) return listK;
	if (m === undefined) return listL;
	if (n === undefined) return listM;
	if (o === undefined) return listN;
	if (p === undefined) return listO;
	if (q === undefined) return listP;
	if (r === undefined) return listQ;
	if (s === undefined) return listR;
	if (t === undefined) return listS;
	if (u === undefined) return listT;
	if (v === undefined) return listU;
	if (w === undefined) return listV;
	if (x === undefined) return listW;
	if (y === undefined) return listX;
	if (z === undefined) return listY;
	return listZ;
};

export const head = (list) => {
	if (isEmpty(list)) return undefined;
	return car(list);
};

export const tail = (list) => {
	if (isEmpty(list)) return undefined;
	return cdr(list);
};

export const isEmpty = list => car(list) === null && cdr(list) === null ? true : false;

export const toString = (list) => {
	const iter = (acc, myList) => {
		if (isEmpty(myList)) return acc + ')';
		if (acc === '(') return iter(acc + head(myList), tail(myList));
		return iter(acc + ', ' + head(myList), tail(myList));
		}
	return iter('(', list);
};